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
    max-width: 620px;
`;

const LanguageGraph = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    margin-bottom: 10px;
`;

const LanguageStats = styled.div`
    position: relative 
`;

const Overview = styled.div`
    font-weight: 400 !important;
    margin: 0;
    margin-left: 0.15em;
    font-size: 0.75em !important;
    line-height: 1.05em !important;
    width: 100%
`;

const Heading = styled.h2`
    display: flex
    flex-direction: row
    font-weight: normal;
    font-size: 1.2em !important;
    line-height: 1.3em !important;
    margin: 0em 0px 0.5em !important;
`;

const GithubLogo = styled.span`
    margin-right: 5px;
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
                {loading ? <div>loading</div> : 
                <>
                <LanguageGraph onClick={() => setToggle(!toggle)}>
                    <Graph {...gitrepo.languages} />
                </LanguageGraph>
                {toggle ? <LanguageStats>
                    <Stats {...gitrepo.languages} />
                </LanguageStats> : ""}
                <Overview>
                    <Heading>
                        <GithubLogo>
                            <svg
                                width="20px"
                                height="20px"
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </GithubLogo>
                        {user}/{repo}
                    </Heading>
                </Overview>
                </>
                }
            </Readme>
    )
}

export default README;