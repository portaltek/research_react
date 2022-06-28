import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";

const DEFAULT_DATA = {
  data: [
    {
      id: "id1",
      name: "id1",
    },
    {
      id: "id2",
      name: "id2",
    },
  ],
};

export class Test05SpiServiceLocal {
  async createFile() {
    const saved = localStorage.getItem("mydata2");
    console.log(JSON.parse(saved).data);
    const data = JSON.parse(saved) || DEFAULT_DATA;
    data.push({
      id: "id3",
      name: "id3",
    });
    console.log(data);
    localStorage.setItem("mydata2", JSON.stringify(data));
    //localStorage.setItem("mydata2", JSON.stringify(DEFAULT_DATA));
  }
}


