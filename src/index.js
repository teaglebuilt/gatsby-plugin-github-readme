import React, { useState, useEffect } from "react";
import useGithub from "./hooks/useGithubData";
import styled from "styled-components";

const Readme = styled.div`
    background-color: #fff;
    color: #000
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    box-shadow: 1px 2px 4px 0 rgba(0,0,0,0.18);
    margin: 1.1em auto 1.30em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    overflow: hidden;
    max-width: 620px
`;

const README = ({ user, repo }) => {
    const [gitrepo, setGitRepo] = useState({});
    const[toggle, setToggle] = useState(false)
    const repos = useGithub();

    useEffect(() => {
        const repository = repos.find(node => node.node.name == `${user}/${repo}`)
        // setGitRepo(repository.node)
    }, [gitrepo])

    return(
        <Readme>Readme</Readme>
    )
}

export default README;