import React, {useState, useEffect} from 'react'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'

import {commerce} from '../../../lib/commerce'
import useStyles from './styles'
import AdressForm from '../AdressForm'
import PaymentForm from '../PaymentForm'

const steps = ['Shipping adress', 'Payment details']

const Checkout = ({cart}) => {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken,setCheckoutToken] = useState(null)
  const [shippingData, setShippingdata] = useState({})
  const classes = useStyles()

  useEffect(()=>{
    const generateToken = async()=>{
      try{
        const token = await commerce.checkout.generateToken(cart.id, {type:'cart'})
        console.log(token);
        setCheckoutToken(token)
      } catch (error){console.log(error)}
    }
    generateToken()
  },[cart])

  const nextStep = ()=> setActiveStep((previousActiveStep)=>previousActiveStep + 1)
  const backStep = ()=> setActiveStep((previousActiveStep)=>previousActiveStep - 1)

  const next = (data) => {
    setShippingdata(data)
    nextStep()
  }

  const Confirmation =()=>(
    <div>
      Confirmation
    </div>
  )

  const Form =()=> activeStep === 0 ? <AdressForm checkoutToken={checkoutToken} next={next}/> : <PaymentForm shippingData={shippingData}/>

  return (
    <React.Fragment>
      <div className={classes.toolbar}/>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step)=>(
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep===steps.length?<Confirmation/>: checkoutToken && <Form/>}
        </Paper>
      </main>
    </React.Fragment>
  )
}

export default Checkout
