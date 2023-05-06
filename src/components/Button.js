import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const HowToUseBtn = () => {
  return <StyledButton>How to use?</StyledButton>;
};

const StyledButton = styled(Button)`
  height: 54px;
  border: 1px solid rgba(13, 178, 178, 1);
  text-transform: none;
  color: #fff;
  font-weight: 500;
  padding: 0rem 1.5rem;
  font-size: 18px;
  line-height: 0;
`;
