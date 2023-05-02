import { Button } from "@mui/material";
import Head from "next/head";
import styles from "./index.module.css";

export default function manual() {
  function handleClick() {
    const authUrl = createAuthUrl();
    window.location.replace(authUrl);
  }

  function createAuthUrl() {
    const response_type = "code";
    const client_id = "23QVT4";
    //const redirect_uri = "http://localhost:3000/manuel/callback";
    const scope = "profile settings sleep";

    const authUrl = `https://www.fitbit.com/oauth2/authorize?response_type=${response_type}&client_id=${client_id}&scope=${scope}`; //&redirect_uri=${redirect_uri}
    return encodeURI(authUrl);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Button onClick={handleClick} variant="contained">
          Sign in with Fitbit
        </Button>
      </main>
    </>
  );
}
