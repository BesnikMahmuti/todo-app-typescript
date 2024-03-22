import { Breadcrumbs, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { ChevronRight } from '../../assets/icons/ChevronRight'
import { Fragment } from 'react'

export function BreadCrumbsNavigation() {
  const location = useLocation()
  const currentPage = location.pathname === '/' ? 'Home' : 'Edit'
  return (
    <Fragment>
      <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRight />}>
        <Typography color="primary.main" variant="body1">
          Task Management
        </Typography>

        <Typography color="grey.500" variant="body1">
          {currentPage}
        </Typography>
      </Breadcrumbs>
    </Fragment>
  )
}
