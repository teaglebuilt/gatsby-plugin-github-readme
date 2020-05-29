import React, { useState, useEffect } from "react";
import useGithub from "./hooks/useGithubData";
import styled from "styled-components";
import Graph from "./components/graph";
import Stats from "./components/stats";


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

const LanguageGraph = styled.div`
    display: flex;
    flex-direction: row
    cursor: pointer
`;

const LanguageStats = styled.div`
    position: relative 
`;

const Hidden = styled.div`
    display: none;
`;


const README = ({ user, repo }) => {
    const [gitrepo, setGitRepo] = useState(null);
    const [loading, setLoading] = useState(true);
    const[toggle, setToggle] = useState(false)
    const repos = useGithub();

    useEffect(() => {
        const repository = repos.find(node => node.node.name == `${user}/${repo}`)
        setGitRepo(repository.node)
        setLoading(false);
    }, [repos, gitrepo, toggle])

    return(
        
        <Readme>
            {loading ? <div>...loading</div> : 
                <LanguageGraph onClick={() => setToggle(!toggle)}>
                    <Graph {...gitrepo.languages} />
                </LanguageGraph>
            }
            {/* <LanguageGraph onClick={() => setToggle(!toggle)}>
                <Graph {...gitrepo} />
            </LanguageGraph> */}
            {/* {toggle ? 
                <LanguageStats>
                    <Stats {...gitrepo.node.languages} />
                </LanguageStats> : <Hidden />
            }  */}
        </Readme>
    )
}

export default README;