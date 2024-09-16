let correctUser = false;
let correctPass = false;

let username = "master_soc";
let password = "secr3t910#";

cmatrix = function () {
  $("body").append("<canvas></canvas>");

  matrix($("canvas")[0], {
    chars: matrix.range(0x30a1, 0x30f6).concat(matrix.range(0x0030, 0x0039)),
    font_size: 16,
    unmount: () => {
      $("canvas").remove();
    },
  });
};

const skull = `
                                 ...----....
                         ..-:"''         ''"-..
                      .-'                      '-.
                    .'              .     .       '.
                  .'   .          .    .      .    .''.
                .'  .    .       .   .   .     .   . ..:.
              .' .   . .  .       .   .   ..  .   . ....::.
             ..   .   .      .  .    .     .  ..  . ....:IA.
            .:  .   .    .    .  .  .    .. .  .. .. ....:IA.
           .: .   .   ..   .    .     . . .. . ... ....:.:VHA.
           '..  .  .. .   .       .  . .. . .. . .....:.::IHHB.
          .:. .  . .  . .   .  .  . . . ...:.:... .......:HIHMM.
         .:.... .   . ."::"'.. .   .  . .:.:.:II;,. .. ..:IHIMMA
         ':.:..  ..::IHHHHHI::. . .  ...:.::::.,,,. . ....VIMMHM
        .:::I. .AHHHHHHHHHHAI::. .:...,:IIHHHHHHMMMHHL:. . VMMMM
       .:.:V.:IVHHHHHHHMHMHHH::..:" .:HIHHHHHHHHHHHHHMHHA. .VMMM.
       :..V.:IVHHHHHMMHHHHHHHB... . .:VPHHMHHHMMHHHHHHHHHAI.:VMMI
       ::V..:VIHHHHHHMMMHHHHHH. .   .I":IIMHHMMHHHHHHHHHHHAPI:WMM
       ::". .:.HHHHHHHHMMHHHHHI.  . .:..I:MHMMHHHHHHHHHMHV:':H:WM
       :: . :.::IIHHHHHHMMHHHHV  .ABA.:.:IMHMHMMMHMHHHHV:'. .IHWW
       '.  ..:..:.:IHHHHHMMHV" .AVMHMA.:.'VHMMMMHHHHHV:' .  :IHWV
        :.  .:...:".:.:TPP"   .AVMMHMMA.:. "VMMHHHP.:... .. :IVAI
       .:.   '... .:"'   .   ..HMMMHMMMA::. ."VHHI:::....  .:IHW'
       ...  .  . ..:IIPPIH: ..HMMMI.MMMV:I:.  .:ILLH:.. ...:I:IM
     : .   .'"' .:.V". .. .  :HMMM:IMMMI::I. ..:HHIIPPHI::'.P:HM.
     :.  .  .  .. ..:.. .    :AMMM IMMMM..:...:IV":T::I::.".:IHIMA
     'V:.. .. . .. .  .  .   'VMMV..VMMV :....:V:.:..:....::IHHHMH
       "IHH:.II:.. .:. .  . . . " :HB"" . . ..PI:.::.:::..:IHHMMV"
        :IP""HHII:.  .  .    . . .'V:. . . ..:IH:.:.::IHIHHMMMMM"
        :V:. VIMA:I..  .     .  . .. . .  .:.I:I:..:IHHHHMMHHMMM
        :"VI:.VWMA::. .:      .   .. .:. ..:.I::.:IVHHHMMMHMMMMI
        :."VIIHHMMA:.  .   .   .:  .:.. . .:.II:I:AMMMMMMHMMMMMI
        :..VIHIHMMMI...::.,:.,:!"I:!"I!"I!"V:AI:VAMMMMMMHMMMMMM'
        ':.:HIHIMHHA:"!!"I.:AXXXVVXXXXXXXA:."HPHIMMMMHHMHMMMMMV
          V:H:I:MA:W'I :AXXXIXII:IIIISSSSSSXXA.I.VMMMHMHMMMMMM
            'I::IVA ASSSSXSSSSBBSBMBSSSSSSBBMMMBS.VVMMHIMM'"'
             I:: VPAIMSSSSSSSSSBSSSMMBSSSBBMMMMXXI:MMHIMMI
            .I::. "H:XIIXBBMMMMMMMMMMMMMMMMMBXIXXMMPHIIMM'
            :::I.  ':XSSXXIIIIXSSBMBSSXXXIIIXXSMMAMI:.IMM
            :::I:.  .VSSSSSISISISSSBII:ISSSSBMMB:MI:..:MM
            ::.I:.  ':"SSSSSSSISISSXIIXSSSSBMMB:AHI:..MMM.
            ::.I:. . ..:"BBSSSSSSSSSSSSBBBMMMB:AHHI::.HMMI
            :..::.  . ..::":BBBBBSSBBBMMMB:MMMMHHII::IHHMI
            ':.I:... ....:IHHHHHMMMMMMMMMMMMMMMHHIIIIHMMV"
              "V:. ..:...:.IHHHMMMMMMMMMMMMMMMMHHHMHHMHP'
               ':. .:::.:.::III::IHHHHMMMMMHMHMMHHHHM"
                 "::....::.:::..:..::IIIIIHHHHMMMHHMV"
                   "::.::.. .. .  ...:::IIHHMMMMHMV"
                     "V::... . .I::IHHMMV"'
                       '"VHVHHHAHHHHMMV:"'
`;

setTimeout(() => {
  $(".term").terminal(
    {
      help: () => {
        return [
          `\nHELLO HACKER...\n`,
          "YOU NEED TO USE YOUR SKILLS",
          "TO INVESTIGATE",
          "AND UNRAVEL",
          "THE SECRETS OF THE CYBER WORLD",
          "READ THE MANUAL... IT HAS EVERYTHING",
        ].join("\n  ");
      },

      skull: function () {
        return skull;
      },
      cmatrix: cmatrix,
      random_loc: function (width = 400, height = 400) {
        width = Math.floor(Math.random() * 600);
        height = Math.floor(Math.random() * 600);
        return $(`<img src="https://picsum.photos/${width}/${height}">`);
      },
      investigate: () => $(`<img src="pass_clue.png">`),
      explore: () => $(`<img src="user_clue.png">`),

      pass: function (pass) {
        if (pass.toLowerCase() === password) {
          correctPass = true;
          return "Correct password! Wow...";
        }

        return "Wrong password.";
      },

      user: function (user) {
        if (user.toLowerCase() === username) {
          correctUser = true;
          return "Correct username...";
        }

        return "Wrong username.";
      },

      login: function () {
        if (correctPass && correctUser) {
          cmatrix();
          return (
            "Congratulations investigator!\nYou win a..." +
            ["nice 🔥", "great 🔥", "bombastic 🔥"][
              Math.floor(Math.random() * 3)
            ] +
            " prize!\nSpeak to a SOC team member!"
          );
        }

        return "\nDONT YOU DARE\n";
      },

      q: function () {},
    },
    {
      prompt: "soc> ",
      checkArity: false,
      greetings:
        "\n\nThe SOC greets you\n\n\t...\tyou should look for `help`.\n\n",
    }
  );
}, 1000);
