import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  serialNumber: number,
  videoName: string,
  videoNameURL: string,
  videoSummaryName: string,
  videoDuration: string
) {
  return {
    serialNumber,
    videoName,
    videoNameURL,
    videoSummaryName,
    videoDuration,
  };
}

const rows = [
  createData(
    1,
    "small_lecture.mp4",
    "small_lecture",
    "small_lecture_summarized",
    "32:04"
  ),
  createData(
    1,
    "small_lecture.mp4",
    "small_lecture",
    "small_lecture_summarized",
    "32:04"
  ),
  createData(
    1,
    "small_lecture.mp4",
    "small_lecture",
    "small_lecture_summarized",
    "32:04"
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Video ID</TableCell>
            <TableCell align="right">Video Name</TableCell>
            <TableCell align="right">Video Summary</TableCell>
            <TableCell align="right">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.serialNumber}>
              <TableCell component="th" scope="row">
                {row.serialNumber}
              </TableCell>
              <TableCell align="right">
                <Link to={"/video/" + row.videoNameURL}>{row.videoName}</Link>
              </TableCell>
              <TableCell align="right">
                <Link to={"/summarizedVideo/" + row.serialNumber}>
                  {row.videoSummaryName}
                </Link>
              </TableCell>
              <TableCell align="right">{row.videoDuration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
