import React from "react";
import styled from "styled-components";
import { data } from "../data.js";

import { Template as Tm, BackHome } from "../layout/Template";

import { ReactComponent as Winner } from "../img/winner.svg";

const History = () => {
  return (
    <Template>
      <h1 data-aos="zoom-in">
        <Winner />
        Winner History
      </h1>
      <div className="table" data-aos="fade-in">
        <Table>test</Table>
      </div>
      <BackHome />
    </Template>
  );
};

export default History;

const Template = styled(Tm)`
  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-shadow: 0px 0px 3px rgba(255, 245, 0, 0.86), 0px 0px 72px rgba(255, 245, 7, 0.43);
    color: #fffca3;
    font-family: "Fira Sans Bold", sans-serif;
    font-weight: bold;
    font-size: 48px;
    margin-bottom: 90px;
    svg {
      margin-bottom: 23px;
    }
  }
  a {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
      linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: 0px 0px 17.0303px rgba(169, 0, 212, 0.77), 0px 0px 65.9298px rgba(180, 75, 206, 0.3),
      inset 0px 0px 6.59298px rgba(180, 75, 206, 0.3);
    bottom: 50px;
  }
  .table {
    overflow-x: auto;
  }
`;

const Table = () => {
  return (
    <TableStyle>
      <thead>
        <tr>
          <th>Winner Address</th>
          <th>Date</th>
          <th>Time</th>
          <th>Tickets in Draw</th>
          <th>Prize</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.address}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.ticketInDraw}</td>
            <td>{item.prize}</td>
          </tr>
        ))}
      </tbody>
    </TableStyle>
  );
};

const TableStyle = styled.table`
  width: 1300px;
  min-width: 1300px;
  border-spacing: 0;
  overflow: hidden;
  text-align: center;
  margin: 0 auto;

  td,
  th {
    padding: 20px;
  }

  thead {
    text-transform: capitalize;
    font-family: "Fira Sans Bold", sans-serif;
    font-weight: bold;
    font-size: 30px;
  }
  td,
  th {
    :last-child {
      padding-right: 80px;
    }
  }

  tbody {
    tr {
      background: #2b2b2b;
      transition: background-color 100ms;
      td {
        border-bottom: 2px solid rgba(244, 244, 244, 0.3);
      }
      :hover {
        background: #444444;
        transition: background-color 200ms;
      }
      :first-child {
        border-radius: 36px;
        td:first-child {
          border-top-left-radius: 36px;
        }
        td:last-child {
          border-top-right-radius: 36px;
        }
      }
      :last-child {
        td {
          border-bottom: none;
        }
        border-radius: 36px;
        td:first-child {
          border-bottom-left-radius: 36px;
        }
        td:last-child {
          border-bottom-right-radius: 36px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    td,
    th {
      padding: 15px 20px;
    }
    padding-right: 20px;
    padding-left: 20px;
  }
`;
