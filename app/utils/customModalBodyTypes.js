import React from 'react';

export const dateTimeBody = (rowData, column) => {
  const fieldData = rowData[column.field];
  if (!fieldData) {
    return '';
  }
  return new Date(fieldData).toLocaleDateString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

export const linkBody = (rowData, column) => {
  const fieldData = rowData[column.field];
  if (!fieldData) {
    return '';
  }
  return (
    <a href={fieldData} target="_blank" rel="noopener noreferrer">
      {fieldData}
    </a>
  );
};

export const isActiveBody = (rowData, column) => {
  const fieldData = rowData[column.field];
  const commonStyle = { borderRadius: '3px', padding: '5px', color: '#fff' };
  if (!fieldData) {
    return <span style={{ ...commonStyle, backgroundColor: '#fa3f3f' }}>Pasif</span>;
  }
  return <span style={{ ...commonStyle, backgroundColor: '#45b796' }}>Aktif</span>;
};
