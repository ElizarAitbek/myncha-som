import styled from "styled-components";

export default function Button({
  children,
  onClick,
  variant = "regular",
  ...props
}) {
  return (
    <MainButton onClick={onClick} $variant={variant} {...props}>
      {children}
    </MainButton>
  );
}

const MainButton = styled.button`
  background-color: ${({ $variant }) =>
    $variant === "regular" ? "#6f3be5" : "#e3e8f8"};
  color: ${({ $variant }) => ($variant === "regular" ? "#ffffff" : "#000000")};

  padding: 13px 18px 13px 13px;
  font-size: 0.875rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === "regular" ? "#5d31c3" : "#b8bccb"};
  }
`;
