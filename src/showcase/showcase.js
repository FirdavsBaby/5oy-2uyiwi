import Button from "../buttons/button";
import Button2 from "../buttons/button2";

export default function Showcase() {
  return (
    <div>
      <article id="showcase">
        <h1>Earn polygon by working in virtual farms</h1>
        <p>
          Put your human rabbit NFT to work and earn daily from farm wages by
          farm owners. Or purchase a farm and harvest polygon
        </p>
        <div className="btns">
          <Button>Get Started</Button>
          <Button2>Join our discord</Button2>
        </div>
        <div className="about">
          <div className="white-cub"></div>
          <p className="footer-p">Dont scroll, check the header tab</p>
        </div>
      </article>
    </div>
  );
}
