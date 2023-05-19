const command = "sysctl -n vm.loadavg hw.ncpu";
const refreshFrequency = 10000;

/**
 * @param {object} props
 * @param {string} props.output
 */
const render = ({ output }) => {
  if (output.length === 0) {
    return false;
  }

  const [vmLoadAvg, hwNcpu] = output.split("\n");
  const ncpu = Number.parseInt(hwNcpu, 10);
  const load = vmLoadAvg.replace("{ ", "").replace(" }", "").split(" ");

  return (
    <div class="screen">
      <div class="pecanload">
        ◇ <span class={getClass(load[0], ncpu)}>{load[0]} </span>
        <span class={getClass(load[1], ncpu)}>{load[1]} </span>
        <span class={getClass(load[2], ncpu)}>{load[2]}</span>
      </div>
    </div>
  );
};

const getClass = (load, ncpu) => {
  if (load >= ncpu) {
    return "heavy";
  } else if (load >= ncpu / 2) {
    return "moderate";
  } else {
    return "light";
  }
};

export { command, refreshFrequency, render };
