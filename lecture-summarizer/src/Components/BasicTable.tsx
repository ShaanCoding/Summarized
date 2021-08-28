import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { IVideo } from "../API/Interfaces";
import { fetchVideoList } from "../API/Requests";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const [videoList, setVideoList] = useState<IVideo[]>([]);

  useEffect(() => {
    const getVideoList = async () => {
      const getVideoListFromServer = await fetchVideoList();
      setVideoList(getVideoListFromServer);
    };

    getVideoList().then(console.log);
  }, []);
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
          {videoList.map((video: IVideo) => {
            return (
              <TableRow key={video.id}>
                <TableCell component="th" scope="row">
                  {video.id}
                </TableCell>
                <TableCell align="right">
                  <Link to={"/summarizedVideo/" + video.id}>
                    {video.name}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <Link to={"/summarizedVideo/" + video.id}>
                    {video.name}
                  </Link>
                </TableCell>
                <TableCell align="right">00:00</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
