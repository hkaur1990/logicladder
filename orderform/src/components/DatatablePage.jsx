import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Vendor Name',
        field: 'vendorName',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Pick up Date',
        field: 'pickUpDate',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 200
      }
    ],
    rows: [
      { "id": 1, "vendorName": "ABC musicals", "pickUpDate": "2023-05-01", "status": "Shipped" },
      { "id": 2, "vendorName": "xyz technologies", "pickUpDate": "2023-05-02", "status": "Cancelled" },
      { "id": 3, "vendorName":  "shiksha Kendra", "pickUpDate": "2023-05-03", "status": "Pending" },
      { "id": 4, "vendorName": "kalakriti academy", "pickUpDate": "2023-05-01", "status": "Shipped" },
      { "id": 4, "vendorName": "tansen mahavidyala", "pickUpDate": "2023-05-02", "status": "Cancelled" },
      { "id": 6, "vendorName": "janta book depot", "pickUpDate": "2023-05-03", "status": "Pending" },
      { "id": 7, "vendorName": "Pradeep publishers", "pickUpDate": "2023-05-01", "status": "Shipped" },
      { "id": 8, "vendorName": "abc publishers", "pickUpDate": "2023-05-02", "status": "Cancelled" },
      { "id": 9, "vendorName": "ajanta book depot", "pickUpDate": "2023-05-03", "status": "Pending" },
      { "id": 10, "vendorName": "apna store", "pickUpDate": "2023-05-01", "status": "Shipped" },
      { "id": 11, "vendorName": "the book shop", "pickUpDate": "2023-05-02", "status": "Cancelled" },
      { "id": 12, "vendorName": "crosswords", "pickUpDate": "2023-05-03", "status": "Pending" },
      { "id": 13, "vendorName": "KIIT technologies", "pickUpDate": "2023-05-01", "status": "Shipped" },
      { "id": 14, "vendorName": "abc udyog", "pickUpDate": "2023-05-02", "status": "Cancelled" },
      { "id": 15, "vendorName": "xyz pharma", "pickUpDate": "2023-05-03", "status": "Pending" },
      { "id": 16, "vendorName": "xyz udyog", "pickUpDate": "2023-05-01", "status": "Shipped" },
      { "id": 17, "vendorName": "openai.co", "pickUpDate": "2023-05-02", "status": "Cancelled" },
      { "id": 18, "vendorName": "edx co.", "pickUpDate": "2023-05-03", "status": "Pending" },
      { "id": 19, "vendorName": "saraswati book store", "pickUpDate": "2023-05-01", "status": "Shipped" },
      { "id": 20, "vendorName": "study palace", "pickUpDate": "2023-05-02", "status": "Cancelled" },
      { "id": 21, "vendorName": "the book hub", "pickUpDate": "2023-05-03", "status": "Pending" }
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;