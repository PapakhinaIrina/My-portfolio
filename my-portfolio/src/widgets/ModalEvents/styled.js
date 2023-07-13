import { styled } from 'styled-components'
import { Input  } from '@mui/material'
import { spacing } from "../../shared/utils/constants"



export const StyledInputModalEvent = styled(Input) ({
  backgroundColor: "rgb(251, 249, 246)",
  border: "1px solid rgba(184, 182, 182, 0.645)",
  borderRadius: "8px",
  outline: "unset",
  padding: "4px 14px",
  textOverflow: "ellipsis",
  width: "100%",
  marginBottom: spacing[3]
})
