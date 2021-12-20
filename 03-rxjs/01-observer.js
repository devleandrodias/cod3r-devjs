const readline = require("readline");

function getAnswer(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, _) => {
    rl.question(question, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

function girlfriend(event) {
  console.log("G: Apagar as luzes...");
  console.log("G: Pedir silêncio...");
  console.log("G: Surprise!!");
}

function apartmentManager(event) {
  console.log("A: Monitorando barulho...");
  console.log(`Event: ${event.resp}`);
  console.log(`Event: ${event.date}`);
}

async function concierge(interesseds) {
  while (true) {
    const resp = await getAnswer("O namorado chegou? (y/n/q): ");

    if (resp.toLowerCase() === "y") {
      (interesseds || []).forEach((observer) =>
        observer({ resp, date: Date.now() })
      );
    } else if (resp.toLowerCase() === "q") {
      break;
    }
  }
}

/**
 * Register 2 observers [girlfriend, apartmentManager]
 * The Concierge is a Subject
 */
concierge([girlfriend, apartmentManager]);
