import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ReadingGroup.css";

export default function ReadingGroup(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    {
      id: "Time",
      label: "Time",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
    { id: "Topic", label: "Topic", minWidth: 170 },
    { id: "Presenter", label: "Presenter", minWidth: 100 },
    {
      id: "Paper",
      label: "Paper",
      minWidth: 170,
      // align: 'right',
      format: (value) => value.toLocaleString("en-US"),
    },
    // {
    //   id: "Slide",
    //   label: "Slide",
    //   minWidth: 170,
    //   // align: 'right',
    //   format: (value) => value.toLocaleString("en-US"),
    // },
  ];

  const rows = [
    { Time: "2022/3/31", Topic: "", Presenter: "Sana Ayromlou", Paper: "" },
    {
      Time: "2022/3/24",
      Topic: "",
      Presenter: "Guodong Zhang (U of T)",
      Paper: "",
    },
    {
      Time: "2022/3/17",
      Topic:
        "Active label cleaning for improved dataset quality under resource constraints",
      Presenter: "Chun-Yin Huang",
      Paper: "https://www.nature.com/articles/s41467-022-28818-3",
    },
    {
      Time: "2022/3/10",
      Topic: "Projected GAN",
      Presenter: "Ruinan Jin",
      Paper: "http://www.cvlibs.net/publications/Sauer2021NEURIPS.pdf",
    },
  ];

  const renderSchedule = () => {
    return (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
  };

  return (
    <div className="people-container screen-container" id={props.id || ""}>
      <div className="people-parent">
        <ScreenHeading title={"Reading Group"} subHeading={""} />
      </div>
      <div className="reading-intro">
        <span>
          We have weekly TEA Deep Learning Reading Group on Thursdays 5-6pm.We
          will start with open-topic, namely we presented any published papers
          in Nature/Science/TMI/MedIA/TPMI/ICML/NeurIPS/ICLR/CVPR/ECCV/ your own
          work. Here are our recent topics and schedule. You can also find our
          slides{" "}
          <a href="https://eceubcca-my.sharepoint.com/personal/xiaoxiao_li_ece_ubc_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fxiaoxiao%5Fli%5Fece%5Fubc%5Fca%2FDocuments%2FTEA%5FReading%5FGroup&ga=1">
            here
          </a>
          .
        </span>
      </div>
      {renderSchedule()}
    </div>
  );
}
