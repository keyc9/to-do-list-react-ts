import styled from "styled-components";

export const ListItemStyled = styled.a `
    text-decoration: none;
    padding: 10px;
    color: #444;
        &.done {
            color: rgb(19, 145, 19);
        };
        &.notDone {
            color: rgb(193, 9, 9);
        };
`