export interface Note {
  id: string;
  content: string;
  createdAt?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const saveNote = async (content: string): Promise<Note> => {
  const response = await fetch(`${API_BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error(`Failed to save note: ${response.statusText}`);
  }

  return response.json();
};

export const deleteNote = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete note: ${response.statusText}`);
  }
};

export const getNotes = async (): Promise<Note[]> => {
  const response = await fetch(`${API_BASE_URL}/notes`);

  if (!response.ok) {
    throw new Error(`Failed to fetch notes: ${response.statusText}`);
  }

  return response.json();
};
