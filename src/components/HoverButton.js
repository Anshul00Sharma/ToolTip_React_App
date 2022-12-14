// importing bootstrap components
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Badge from "react-bootstrap/Badge";

// hoverButoon component with position props
const HoverButton = ({ position }) => {
  return (
    // hover button with bootstrap tooltip
    <>
      <OverlayTrigger
        style={{ overflow: "hidden" }}
        placement={position ? position : "right"}
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip id="button-tooltip-2" style={{ overflow: "hidden" }}>
            This is a ToolTip At{" "}
            <Badge bg="warning" text="dark">
              {position ? position.toUpperCase() : "RIGHT"}
            </Badge>
            Position
          </Tooltip>
        }
      >
        <div className="Hover-Button">
          <span>Hover Over Me</span>
        </div>
      </OverlayTrigger>
    </>
  );
};

export default HoverButton;
