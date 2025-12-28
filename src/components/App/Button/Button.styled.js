import styled, { keyframes } from "styled-components";
import { hoverRing } from "./Common.styled";

const popIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
`;

export const Button = styled.button`
  ${hoverRing};

  border: 1px solid ${(props) => props.theme.border};
  border-radius: 10px;
  padding: 10px 14px;

  font-size: 16px;
  cursor: pointer;

  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease, transform 0.12s ease;

  background-color: ${(props) => {
    if (props.$variant === "primary") return props.theme.primary;
    if (props.$variant === "ghost") return "transparent";
    return "transparent";
  }};

  color: ${(props) => {
    if (props.$variant === "primary") return props.theme.primaryText;
    return props.theme.text;
  }};

  border-color: ${(props) => {
    if (props.$variant === "ghost") return "transparent";
    return props.theme.border;
  }};

  opacity: ${(props) => (props.$disabled ? 0.55 : 1)};
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};
`;

export const AnimatedBadge = styled.div`
  animation: ${popIn} 0.35s ease;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.border};
  background: rgba(0, 0, 0, 0.03);

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 10px;
  }
`;
