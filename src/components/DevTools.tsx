import { RecoilLogger } from 'recoil-devtools-logger';
import LogMonitor from 'recoil-devtools-log-monitor';
import DockMonitor from 'recoil-devtools-dock';

export const DevTools = () => {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  return (
    <>
      <RecoilLogger />
      <DockMonitor
        changeMonitorKey='ctrl-m'
        changePositionKey='ctrl-q'
        defaultIsVisible={false}
        defaultPosition='bottom'
        toggleVisibilityKey='ctrl-h'>
        <LogMonitor markStateDiff />
      </DockMonitor>
    </>
  );
};

// shoutout `psyoptions-frontend` for inspiration
