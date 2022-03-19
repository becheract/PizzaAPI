import React from 'react'
import { connect } from 'react-redux'

export const Orders = () => {
  return (
    <div>Orders</div>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)