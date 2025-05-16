import React, { useState } from 'react';
import { Grid, Typography, CardContent, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectSkip } from '../../redux/skips/skipsSlice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import SkipDetailModal from '../../modals/SkipDetailModal';
import getSkipImageUrl from '../../utils/getSkipImage';
import {
  StyledCard,
  SkipImage,
  Badge,
  NotAllowedTag,
  ActionArea,
  SelectButton,
  ViewButton,
} from '../../styles/SkipList.styles';
import {selectSelectedSkip } from '../../redux/skips/skipsSelectors';

const SkipList = ({ skips }) => {
  const dispatch = useDispatch();
  const selected = useSelector(selectSelectedSkip);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSkip, setModalSkip] = useState(null);

  const handleSelect = (skip) => {
    dispatch(selectSkip(selected?.id === skip.id ? null : skip));
  };

  const handleOpenModal = (skip) => {
    setModalSkip(skip);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalSkip(null);
  };

  return (
    <>
      <Grid container spacing={3}>
        {skips.map((skip) => {
          const isSelected = selected?.id === skip.id;

          return (
            <Grid item xs={12} sm={6} md={4} key={skip.id}>
              <StyledCard>
                <Box sx={{ position: 'relative' }}>
                  <SkipImage src={getSkipImageUrl(skip.size)} alt={`${skip.size} Yard Skip`} />
                  <Badge>{skip.size} yards</Badge>

                  {!skip.allowed_on_road && (
                    <NotAllowedTag>
                      <WarningAmberIcon fontSize="small" sx={{ mr: 1 }} />
                      Not allowed on the road
                    </NotAllowedTag>
                  )}
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {skip.size} Yard Skip
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skip.hire_period_days} Hire Period
                  </Typography>
                </CardContent>

                <ActionArea>
                  <SelectButton
                    variant={isSelected ? 'contained' : 'outlined'}
                    selected={isSelected ? 1 : 0}
                    onClick={() => handleSelect(skip)}
                  >
                    {isSelected ? (
                      <>
                        Unselect
                        <CheckCircleIcon sx={{ ml: 1 }} />
                      </>
                    ) : (
                      <>
                        Select This Skip
                        <TouchAppIcon sx={{ ml: 1 }} />
                      </>
                    )}
                  </SelectButton>

                  <ViewButton onClick={() => handleOpenModal(skip)}>
                    View Details
                  </ViewButton>
                </ActionArea>
              </StyledCard>
            </Grid>
          );
        })}
      </Grid>

      <SkipDetailModal open={modalOpen} onClose={handleCloseModal} skip={modalSkip} />
    </>
  );
};

export default SkipList;
