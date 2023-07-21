import React from 'react';
import './seed';

class EditableTimerList extends React.Component {
  render() {
    return (
      <div id='timers'>
        <EditableTimer 
          title='Learn React'
          project='Web Domination'
          elapsed='8986300'
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer 
          title='Learn React'
          project='Web Domination'
          elapsed='8986300'
          runningSince={null}
          editFormOpen={true}
        /> 
      </div>
    );
  }
}

class EditableTimer extends React.Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

class TimeDashboard extends React.Component { 
  

  render() {
    
    return (
      <div className='ui three column centered grid'>
        <div className='column'>

        </div>
      </div>
    );
  }
} 

export default TimeDashboard;