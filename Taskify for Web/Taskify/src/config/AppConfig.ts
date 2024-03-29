export default class AppConfig {
  static TASK_SERVER_URL: string | undefined = process.env.REACT_APP_TASK_SERVER_URL;

  static TASKS_API_URL = `${AppConfig.TASK_SERVER_URL}/api/tasklist`;
}

