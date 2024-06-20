import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Stage, Layer, Line } from 'react-konva';
import { HexColorPicker } from 'react-colorful';
import { Button } from '../index';
import {
  CanvasContainer,
  CanvasSetting,
  ColorWrapper,
  ButtonContainer,
  StyledStage,
  StageWrapper,
} from './styled';

const Canvas = forwardRef((props, ref) => {
  const stageRef = useRef(null);
  const [mode, setMode] = useState('brush');
  const [color, setColor] = useState('#000000');
  const [lines, setLines] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [savedLines, setSavedLines] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setStageSize({
        width: window.innerWidth * 0.2, // 20vw
        height: window.innerHeight * 0.45, // 45vh
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useImperativeHandle(ref, () => ({
    getImage: () => {
      return stageRef.current.toDataURL();
    },
  }));

  const handleMouseDown = () => {
    setDrawing(true);
    const stage = stageRef.current;
    const pos = stage.getPointerPosition();
    setLines([...lines, { tool: mode, color: color, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = () => {
    if (!drawing) {
      return;
    }
    const stage = stageRef.current;
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    setLines([...lines.slice(0, lines.length - 1), lastLine]);
  };

  const handleMouseUp = () => {
    setDrawing(false);
    setSavedLines([...savedLines, ...lines]);
    setLines([]);
    setUndoStack([]);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleDownload = () => {
    const dataURL = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleUndo = () => {
    if (savedLines.length > 0) {
      const lastLine = savedLines[savedLines.length - 1];
      setUndoStack([...undoStack, lastLine]);
      setSavedLines(savedLines.slice(0, savedLines.length - 1));
    }
  };

  const handleRedo = () => {
    if (undoStack.length > 0) {
      const lastUndo = undoStack[undoStack.length - 1];
      setSavedLines([...savedLines, lastUndo]);
      setUndoStack(undoStack.slice(0, undoStack.length - 1));
    }
  };

  const handleClearCanvas = () => {
    setSavedLines([]);
    setUndoStack([]);
  };

  return (
    <CanvasContainer>
      <CanvasSetting>
        <ColorWrapper>
          <HexColorPicker color={color} onChange={handleColorChange} />
        </ColorWrapper>
        <ButtonContainer>
          <Button
            theme={'CanvasSettingBtn'}
            onClick={() => handleModeChange('brush')}
          >
            그리기
          </Button>
          <Button
            theme={'CanvasSettingBtn'}
            onClick={() => handleModeChange('eraser')}
          >
            지우기
          </Button>
          <Button theme={'CanvasSettingBtn'} onClick={handleDownload}>
            다운로드
          </Button>
          <Button theme={'CanvasSettingBtn'} onClick={handleUndo}>
            뒤로가기
          </Button>
          <Button theme={'CanvasSettingBtn'} onClick={handleRedo}>
            되돌리기
          </Button>
          <Button theme={'CanvasSettingBtn'} onClick={handleClearCanvas}>
            초기화
          </Button>
        </ButtonContainer>
      </CanvasSetting>
      <StageWrapper>
        <StyledStage>
          <Stage
            width={stageSize.width}
            height={stageSize.height}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            ref={stageRef}
          >
            <Layer>
              {savedLines.map((line, i) => (
                <Line
                  key={i}
                  points={line.points}
                  stroke={line.color}
                  strokeWidth={line.tool === 'eraser' ? 20 : 5}
                  tension={0.5}
                  lineCap="round"
                  globalCompositeOperation={
                    line.tool === 'eraser' ? 'destination-out' : 'source-over'
                  }
                />
              ))}
              {drawing && lines.length > 0 && (
                <Line
                  points={lines[lines.length - 1].points}
                  stroke={lines[lines.length - 1].color}
                  strokeWidth={mode === 'eraser' ? 20 : 5}
                  tension={0.5}
                  lineCap="round"
                  globalCompositeOperation={
                    mode === 'eraser' ? 'destination-out' : 'source-over'
                  }
                />
              )}
            </Layer>
          </Stage>
        </StyledStage>
      </StageWrapper>
    </CanvasContainer>
  );
});

export default Canvas;
