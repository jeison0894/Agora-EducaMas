import { React } from "react";
import { Button } from "react-bootstrap";

export default function linksRow({ links, index, removelinks}) {
  return (
    <div className="linksCard">
      <a href={links.link} target="_blank" rel="noreferrer">
        {links.link}
      </a>
      <div>
        <Button
          variant="outline-danger btn-sm"
          onClick={() => removelinks(index)}
        >
          ✕
        </Button>
      </div>
    </div>
  );
}