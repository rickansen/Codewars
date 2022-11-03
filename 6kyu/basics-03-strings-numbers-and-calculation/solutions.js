const calculateString = (st) =>
  String(Math.round(eval(st.replace(/[^\d+\-*\/\.]/g, ''))));
