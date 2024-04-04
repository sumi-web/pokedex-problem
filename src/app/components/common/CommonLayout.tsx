'use client';
import React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box component="section">
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};

export default CommonLayout;
