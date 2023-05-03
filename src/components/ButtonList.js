import React from 'react'
import Button from './Button';

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Football"/>
      <Button name="Tennis"/>
      <Button name="Politics"/>
      <Button name="Banking"/>
      <Button name="Dancing"/>
      <Button name="Swimming"/>
      <Button name="Running"/>
      <Button name="Walking"/>

    </div>
  )
}

export default ButtonList;