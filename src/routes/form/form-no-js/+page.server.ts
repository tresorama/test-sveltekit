import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

// Load

type Todo = {
  id: string,
  title: string,
  content: string,
  is_completed: boolean,
};

const createTodo = (todo: Pick<Todo, "content" | "title">): Todo => {
  return {
    ...todo,
    id: `${Date.now()}-${Math.random() * 400}`,
    is_completed: false
  };
};
let todos: Todo[] = [
  createTodo({ title: 'saluta andonio', content: 'proprio lui' }),
];

export const load: PageServerLoad = async () => {
  console.log("form-no-js - load");

  return { todos };
};


// Form Actions

export const actions: Actions = {
  addTodo: async (event) => {
    console.log("form-no-js - formActions - addTodo");
    const { request } = event;
    const formData = await request.formData();

    const title = String(formData.get('title') ?? '');
    const content = String(formData.get('content') ?? '');
    console.log({ title, content });

    const errors: {
      title?: string,
      content?: string,
    } = {};
    if (!title) errors.title = 'title is required';
    if (!content) errors.content = 'content is required';
    if (Object.keys(errors).length > 0) {
      console.log('invalid fields');
      console.log({ errors });
      return fail(400, { title, content, errors });
    }

    todos = [...todos, createTodo({ title, content })];
  }
};