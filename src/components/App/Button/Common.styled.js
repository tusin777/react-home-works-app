import { css } from "styled-components";

export const hoverRing = css`
  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid rgba(47, 111, 237, 0.35);
    outline-offset: 2px;
  }
`;
