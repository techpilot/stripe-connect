import styled from "styled-components";

export const LgContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto 0 auto;
  width: 100%;
  padding: 20px 0 !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  .center {
    align-items: center;
  }
`;

export const EditStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.5rem;
  padding-bottom: 5rem;
  border-bottom: 2px solid #e6e6e6;

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #63625f;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .div-container {
    flex: 0.8;
    align-items: flex-start;
    justify-content: start;
    max-width: 550px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    flex: 0.7;
    align-items: flex-start;
    justify-content: start;
    margin: 0.3rem 0;
    padding: 1rem;
    border: 1px solid #fafafa;
    border-width: 1px;
    border-radius: 0.7rem;
    background-color: #fafafa;

    &:focus-within {
      border: 2px solid #add8e6;
    }
  }

  .form-text {
    font-size: normal;
    // color: #8c8c8c;
    padding-top: 0.3rem;
    padding-bottom: 0.2rem;
    padding-left: 0.5rem;
    align-self: start;
  }

  .form-input {
    width: 80vw;
    font-size: 1rem;
    font-weight: 500;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border: none;
    background-color: transparent;
    // padding-bottom: 0.3rem;
  }

  .select-container {
    border: 1px solid #fafafa;
    border-width: 1px;
    border-radius: 0.7rem;
    background-color: #fafafa;
    outline: 2px solid transparent;
    outline-offset: 2px;
    margin: 1rem 0;
    padding: 1rem 0.5rem;
    color: #63625f;
  }

  .flex {
    display: flex;
    flex-direction: column;
  }

  .margin {
    margin-right: 0 !important;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    flex-grow: 0.48;
  }

  @media (min-width: 1280px) {
    padding-right: 0 !important;
    padding-left: 0 !important;

    .div-container {
      max-width: 650px;
    }
  }

  @media (min-width: 1023px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    padding-right: 2rem;
    padding-left: 2rem;
    border-bottom: 2px solid #e6e6e6;

    .form-input {
      width: 100%;
    }

    .flex {
      flex-direction: row;
      justify-content: space-between;
    }

    .margin {
      margin-right: 0.5rem !important;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: start;
      color: #63625f;
    }
  }
`;
