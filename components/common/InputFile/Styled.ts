import styled from "styled-components";

export const PreviewContainer = styled.label`
  border: 1px dashed ${({ theme }) => theme.colors.darkerGrey};
  padding: 20px;
  text-align: center;
  display: block;
  margin-bottom: 0;
  cursor: pointer;
`;

export const CustomFileInput = styled.input`
  cursor: pointer;
`;
