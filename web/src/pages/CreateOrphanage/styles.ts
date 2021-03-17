import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.background};
`;

export const Content = styled.main`
  flex: 1;

  form {
    width: 700px;
    margin: 64px auto;

    background: ${(props) => props.theme.colors.backgroundPanel};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 20px;

    padding: 64px 80px;

    overflow: hidden;

    fieldset {
      border: 0;

      #uploadImage {
        display: none;
      }

      legend {
        width: 100%;

        font-size: 32px;
        line-height: 34px;
        color: #5c8599;
        font-weight: 700;

        border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
        margin-bottom: 40px;
        padding-bottom: 24px;
      }
    }

    .leaflet-container {
      margin-bottom: 40px;
    }

    fieldset + fieldset {
      margin-top: 80px;
    }

    .input-block + .input-block {
      margin-top: 24px;
    }

    .input-block {
      input {
        height: 64px;
        padding: 0 16px;
      }

      textarea {
        min-height: 120px;
        max-height: 240px;
        resize: vertical;
        padding: 16px;
        line-height: 28px;
      }
      input,
      textarea {
        width: 100%;
        background: ${(props) => props.theme.colors.textAreaColor};
        border: 1px solid ${(props) => props.theme.colors.borderColor};
        border-radius: 20px;
        outline: none;
        color: #5c8599;
      }

      label {
        display: flex;
        color: ${(props) => props.theme.colors.textAreaLabels};
        margin-bottom: 8px;
        line-height: 24px;

        span {
          font-size: 14px;
          color: ${(props) => props.theme.colors.textAreaLabels};
          margin-left: 24px;
          line-height: 24px;
        }
      }

      .new-image {
        height: 96px;
        background: #f5f8fa;
        border: 1px dashed ${(props) => props.theme.colors.borderColor};
        border-radius: 20px;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .button-select {
        display: grid;
        grid-template-columns: 1fr 1fr;

        button {
          height: 64px;
          background: #f5f8fa;
          border: 1px solid ${(props) => props.theme.colors.borderColor};
          color: #5c8599;
          cursor: pointer;
        }

        button.active {
          background: #edfff6;
          border: 1px solid #a1e9c5;
          color: #37c77f;
        }

        button:first-child {
          border-radius: 20px 0px 0px 20px;
        }

        button:last-child {
          border-radius: 0 20px 20px 0;
          border-left: 0;
        }
      }

      .image-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 16px;
      }

      .image-container img {
        width: 100%;
        height: 96px;
        object-fit: cover;
        border-radius: 20px;
      }
    }

    button.confirm-button {
      margin-top: 64px;

      width: 100%;
      height: 64px;
      border: 0;
      cursor: pointer;
      background: #3cdc8c;
      border-radius: 20px;
      color: #ffffff;
      font-weight: 800;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background-color 0.2s;

      svg {
        margin-right: 16px;
      }

      &:hover {
        background: #36cf82;
      }
    }
  }
`;
