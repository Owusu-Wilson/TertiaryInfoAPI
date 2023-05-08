import { Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React, { Component } from "react";
import styles from "../styles/Home.module.css";

function Details() {
  return (
    <div>
      <Head>
        <title>Details Page Here</title>
      </Head>
      <body>
        <h1 className={styles.title}>Details Page</h1>

        <Link href="/">
          <Button sx={styles.button} variant="contained">
            Go Back
          </Button>
        </Link>
      </body>
    </div>
  );
}

export default Details;
