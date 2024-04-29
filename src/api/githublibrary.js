import { Octokit } from "@octokit/rest";
import CryptoJS from "crypto-js";

const getToken = () => {
    return CryptoJS.AES.decrypt(process.env.REACT_APP_GH_TOKEN, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8);
}

const myKey = getToken();
const repo = `test_repo`;

export const fileRead = async (path) => {
  try {
    const octokit = new Octokit({
      auth: myKey,
    });

    const result = await octokit.request(
      `GET /repos/habitual-irony/${repo}/contents/${path}`,
      {
        repo: `${repo}`,
        path: `${path}`,
        encoding: "utf-8",
        decoding: "utf-8",
      }
    );

    return decodeURIComponent(escape(window.atob(result.data.content)));
  } catch (e) {
    return undefined;
  }
};

const getSHA = async (path, octokit) => {
  const result = await octokit.request(
    `GET /repos/habitual-irony/${repo}/contents/${path}`,
    {
      owner: "habitual-irony",
      repo: `${repo}`,
      path: `${path}`,
    }
  );

  return result.data.sha;
};

export const fileWrite = async (path, contents) => {
  const octokit = new Octokit({
    auth: myKey,
  });

  const currentSHA = await getSHA(path, octokit);
  const result = await octokit.request(
    `PUT /repos/habitual-irony/${repo}/contents/${path}`,
    {
      owner: "habitual-irony",
      repo: `${repo}`,
      path: `${path}`,
      message: "chonky commit",
      sha: currentSHA,
      committer: {
        name: "habitual-irony",
        email: "habitual-irony@github.com",
      },
      content: `${btoa(unescape(encodeURIComponent(`${contents}`)))}`,
      headers: {
      },
    }
  );

};

export const deleteWrite = async (path) => {
    const octokit = new Octokit({
        auth: myKey,
    });

    const currentSHA = await getSHA(path, octokit);
    const result = await octokit.request(
        `DELETE /repos/habitual-irony/${repo}/contents/${path}`,
        {
            owner: "habitual-irony",
            repo: `${repo}`,
            path: `${path}`,
            message: "chonky delete",
            sha: currentSHA,
            committer: {
                name: "habitual-irony",
                email: "habitual-irony@github.com",
            },
            headers: {
            },
        }
    );

};
