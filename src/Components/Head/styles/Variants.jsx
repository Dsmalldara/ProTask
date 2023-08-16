export  const animationVariants = {
    hidden: {x:'-4rem', opacity: 0, y: 20 },
    visible: {x:0, opacity: 1, y: 0, transition:{
        type: 'spring',
        stiffness: 70,
    } },
  };
  export  const textVariants = {
    hidden: {x:"-5rem", opacity: 0, y: 30 },
    visible: {x:0, opacity: 1, y: 0, transition:{
        type: 'spring',
        stiffness: 50,
    } },
  };
