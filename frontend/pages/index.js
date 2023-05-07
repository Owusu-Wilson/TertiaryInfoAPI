import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import SearchBar from "../components/SearchBar";
import { Card, FormControlLabel, Grid, Input, Radio, RadioGroup, Select } from "@mui/material";
import { Camera, Image } from "@mui/icons-material";
export default function Home() {
  const [queryText, setQueryText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('')


  const test_api = async () => {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }

    }

    const url = "https://jsonplaceholder.typicode.com/users"
    const url2 = "http://localhost:8080/universities"
    const url3 = `http://localhost:8080/${queryText}`



    //  "http://localhost:8080/universities"
    const response = await fetch(url3, options)
    const unis = await response.json()
    console.log(unis)
  }

  const getData = async () => {
    // Log data
    console.log(`query: ${queryText}`)
    console.log(`filter: ${selectedFilter}`)

    // fetch options
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }

    }

    //  fetch url - formatting the url with the selected filter
    //  the request is set based on the filter selected
    if (selectedFilter == 'acronym') {
      const url = `http://localhost:8080/universities/${queryText}`
      console.log(url)

      //  fetch request being made
      const response = await fetch(url, options)
      const unis = await response.json()
      console.log(unis)

    }
    else if (selectedFilter == 'name') {
      const url = `http://localhost:8080/universities/${selectedFilter}=${queryText}`
      console.log(url)

      //  fetch request being made
      const response = await fetch(url, options)
      const unis = await response.json()
      console.log(unis)
    } else {
       const url = `http://localhost:8080/universities/query/?${selectedFilter}=${queryText}`
      console.log(url)

      //  fetch request being made
      const response = await fetch(url, options)
      const unis = await response.json()
      console.log(unis)
    }




  }
  return (
    <div className={styles.container}>
      <Head>
        <title>GH Tertiary Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid columns={4} rowSpacing={20}>
          <Card />
        </Grid>
        <h1 className={styles.title}>
          Welcome to <span>Tertiary Info Hub</span>
        </h1>

        <SearchBar
          value={queryText}
          onChange={(text) => {
            setQueryText(text.target.value
            )
          }}
        />
        {/* Query filters section */}
        {/* Available routes are 
        /universities
        /universities/name/
        /universities/{acronym}
        /universities/query/ = takes either a region or  acronym
         */}
        <h3>Set Filters</h3>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"

          defaultValue="name"
          value={selectedFilter}
          name="radio-buttons-group"
          row
          onChange={(filterVal) => {
            if (filterVal) {
              setSelectedFilter(filterVal.target.value
              )

            }
            else {
              setSelectedFilter('name'
              )

            }
          }}

        // className={styles.filters}
        >
          <FormControlLabel value="name" control={<Radio />} label="Name" />
          <FormControlLabel value="acronym" control={<Radio />} label="Acronym" />
          <FormControlLabel value="region" control={<Radio />} label="Region" />
        </RadioGroup>

        <Button sx={styles.button} onClick={getData} variant="contained">
          Search
        </Button>
        <Button sx={styles.button} onClick={test_api} variant="contained">
          Test api
        </Button>
      </main>

      <footer>
        <a
          href="https://www.linkedin.com/in/wilson-owusu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" SLabs GH Creatives "}
          <img
            src="/vercel.svg"
            alt="SlabsGH Creatives"
            className={styles.logo}
          />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
