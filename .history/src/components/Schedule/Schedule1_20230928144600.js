import React from 'react'

const Schedule1 = () => {
    const navigate = useNavigate();

    function BackNavigation() {
      navigate(-1);
    }
  return (
    <>
          <div className="Backward_Heading">
        <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        <p>Individual Appointment</p>
      </div>
    </>
  )
}

export default Schedule1