import { Button } from "@mui/joy";
import GoogleIco from "./GoogleIco";
import { Facebook } from "@mui/icons-material";

const SocialButtons = () => {
  return (
    <div className="socials grid gap-3 mt-5">
      <Button variant="outlined" endDecorator={<GoogleIco />}>
        Continue With Google
      </Button>
      <Button variant="outlined" endDecorator={<Facebook />}>
        Continue With Facebook
      </Button>
    </div>
  );
};

export default SocialButtons;
