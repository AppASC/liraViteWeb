import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.heading};
  ${({ theme }) => css`
    @media ${theme.device.mobileL} {
      padding: 1rem 0;
      justify-content: space-evenly;
    }
  `}
`;
export const Title = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.large};
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${theme.colors.shape};
    white-space: nowrap;
  `}
  text-decoration:none;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 5rem;
`;

export const Navigator = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ${({ theme }) => css`
    @media ${theme.device.mobileL} {
      flex-direction: column;
      flex: 0;
    }
  `}
`;

export const Item = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.medium};
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${theme.colors.shape};
    text-decoration: none;
    margin-left: 2rem;
  `}
`;

export const Button = styled.button`
  height: 5.6rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.small};
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background 1s;

  ${({ theme }) => css`
    :hover {
      background-color: transparent;
      color: ${theme.colors.shape};
    }
  `}
`;
