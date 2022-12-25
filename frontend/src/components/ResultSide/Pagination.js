import { Button, Stack } from '@mui/material'
import React from 'react'

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Pagination = ({page, setPage, totalPages}) => {
    let justifyCondition = page > 1 ? "space-between" : "end"

  return (
    <Stack direction="row" justifyContent={justifyCondition} padding="0 30px">
        {page > 1 && (
          <Stack sx={styles.parent}>
            <Button
              variant="contained"
              sx={styles.buttonLeft}
              onClick={() => setPage((page) => page - 1)}
            >
              page {page - 1}
            </Button>
            <ArrowLeftIcon
              sx={{
                position: "absolute",
                top: "4px",
                left: 0,
                color: "#F59A83",
              }}
            />
          </Stack>
        )}

        {page < totalPages && (
          <Stack sx={styles.parent}>
            <Button
              variant="contained"
              sx={styles.buttonRight}
              onClick={() => setPage((page) => page + 1)}
            >
              page {page + 1}
            </Button>
            <ArrowRightIcon
              sx={{
                position: "absolute",
                top: "4px",
                right: 0,
                color: "#F59A83",
              }}
            />
          </Stack>
        )}
      </Stack>
  )
}

const styles = {
    buttonLeft: {
      paddingLeft: "25px",
      color: "#F59A83",
      borderRadius: "20px",
      backgroundColor: "#F9F5F3",
      ":hover": { backgroundColor: "#F2EFEE" },
    },
    buttonRight: {
      paddingRight: "25px",
      color: "#F59A83",
      borderRadius: "20px",
      backgroundColor: "#F9F5F3",
      ":hover": { backgroundColor: "#F2EFEE" },
    },
    parent: {
      position: "relative",
      top: 0,
      left: 0,
      justifyContent: "center",
      alignItems: "center",
    },
  };

export default Pagination