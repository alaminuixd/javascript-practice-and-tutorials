# Execution Context for fetchDataProcess Function

## Creation of Outer Execution Context (fetchDataProcess function)

- Function: fetchDataProcess
- Parameters:
  - url: "theURL" (value passed as argument)
- Local Variables:
  - loading: undefined (initialized)
  - handleData: undefined (initialized)

## Creation of Execution Context for handleData Function

- Function: handleData
- Parameters:
  - data: undefined (parameter)
- Local Variables:
  - log: undefined (parameter)
  - processData: undefined (parameter)

## Execution Context for fetchDataProcess Function

- Parameters:
  - url: "theURL" (value passed as argument)
- Local Variables:
  - loading: true (initialized)
  - handleData: Reference to handleData function

## Execution of fetchData Function

- fetchData function is called with url and handleData
- Asynchronous request is made to "theURL"
- Once the request is complete, handleData will be invoked with the fetched data

## Execution of setTimeout Function

- A timer is set to change loading to false after 500 milliseconds
