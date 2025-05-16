import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSkips } from '../redux/skips/skipsSlice';
import {
  selectSkips,
  selectSelectedSkip,
  selectLoading,
  selectError,
} from '../redux/skips/skipsSelectors';
import SkipList from '../components/SkipList/SkipList';
import SelectedSkipInfo from '../components/SelectedSkipInfo/SelectedSkipInfo';
import FooterActions from '../components/FooterBar/FooterActions';
import {
  Container,
  Typography,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
  InputLabel,
  CircularProgress,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import {
  ArrowUpward,
  ArrowDownward,
  LightMode,
  DarkMode,
} from '@mui/icons-material';

import {
  PageWrapper,
  ThemeToggleWrapper,
  CenteredTitleBox,
  SortControlsBox,
  StyledFormControl,
  LoadingSpinnerWrapper,
  FooterWrapper,
  SkipListWrapper
} from '../styles/SkipSelectionPage.styles';

const SkipSelectionPage = () => {
  const dispatch = useDispatch();
  const skips = useSelector(selectSkips);
  const selectedSkip = useSelector(selectSelectedSkip);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [sortBy, setSortBy] = useState('');
  const [ascending, setAscending] = useState(true);
  const [mode, setMode] = useState('dark');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  useEffect(() => {
    dispatch(fetchSkips());
  }, [dispatch]);

  const handleSortChange = (e) => setSortBy(e.target.value);
  const toggleSortOrder = () => setAscending((prev) => !prev);
  const toggleTheme = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const getTotalPrice = (skip) =>
    skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100;

  const sortedSkips = [...skips].sort((a, b) => {
    let valueA, valueB;

    switch (sortBy) {
      case 'yards':
        valueA = a.size;
        valueB = b.size;
        break;
      case 'price':
        valueA = getTotalPrice(a);
        valueB = getTotalPrice(b);
        break;
      case 'hire_period':
        valueA = a.hire_period_days;
        valueB = b.hire_period_days;
        break;
    case 'transport_cost':
      valueA = a.transport_cost ?? 0;
      valueB = b.transport_cost ?? 0;
        break;
      default:
        return 0;
    }

    return ascending ? valueA - valueB : valueB - valueA;
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageWrapper>
        <ThemeToggleWrapper>
          <Tooltip title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Tooltip>
        </ThemeToggleWrapper>

        <Container maxWidth="lg">
          <CenteredTitleBox>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Choose Your Skip
            </Typography>
            <Typography color="text.secondary">
              Select the skip size that best suits your needs
            </Typography>
          </CenteredTitleBox>

          {!loading && skips.length > 0 && (
            <SortControlsBox>
              <StyledFormControl size="small">
                <InputLabel>Sort By</InputLabel>
                <Select value={sortBy} onChange={handleSortChange} label="Sort By">
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="yards">Yard Size</MenuItem>
                  <MenuItem value="price">Price</MenuItem>
                  <MenuItem value="hire_period">Hire Period</MenuItem>
                  <MenuItem value="transport_cost">Transport Cost</MenuItem>
                </Select>
              </StyledFormControl>

              <Tooltip title={ascending ? 'Ascending' : 'Descending'}>
                <IconButton onClick={toggleSortOrder}>
                  {ascending ? <ArrowUpward /> : <ArrowDownward />}
                </IconButton>
              </Tooltip>
            </SortControlsBox>
          )}

          {loading && (
            <LoadingSpinnerWrapper>
              <CircularProgress color="inherit" />
            </LoadingSpinnerWrapper>
          )}

          {error && <Typography color="error">{error}</Typography>}

          {!loading && !error && (
            <SkipListWrapper>
              <SkipList skips={sortedSkips} />
            </SkipListWrapper>
          )}
        </Container>

        {selectedSkip && (
          <FooterWrapper>
            <SelectedSkipInfo />
            <FooterActions />
          </FooterWrapper>
        )}
      </PageWrapper>
    </ThemeProvider>
  );
};

export default SkipSelectionPage;
