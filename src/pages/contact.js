import * as React from "react";
import ResponsiveAppBar from "../components/modules/header";
export default function Contact() {
  return (
    <>
      <ResponsiveAppBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSccIGrIY07LTgfFPj6xlKNSiIwZmD9wyhX29mGTIuGAfQsWhw/viewform?embedded=true"
          width="640"
          height="800"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          読み込んでいます...
        </iframe>
      </div>
    </>
  );
}
