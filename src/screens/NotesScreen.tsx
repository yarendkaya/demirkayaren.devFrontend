import { useState, useEffect } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { saveNote, deleteNote, getNotes, Note } from "../services/notesService";

const NotesScreen = () => {
  const [noteContent, setNoteContent] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await getNotes();
        setNotes(fetchedNotes);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load notes");
      } finally {
        setInitialLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const handleAddNote = async () => {
    if (!noteContent.trim()) {
      setError("Note content cannot be empty");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const newNote = await saveNote(noteContent);
      setNotes([newNote, ...notes]);
      setNoteContent("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save note");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteNote = async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      await deleteNote(id);
      setNotes(notes.filter((note) => note.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Notes
        </Typography>

        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            label="Write your note"
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            disabled={loading}
            error={!!error}
            helperText={error}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddNote}
            disabled={loading || !noteContent.trim()}
            fullWidth
          >
            {loading ? "Saving..." : "Add Note"}
          </Button>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {initialLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center" py={4}>
            <CircularProgress />
          </Box>
        ) : notes.length === 0 ? (
          <Typography variant="body1" color="text.secondary" align="center">
            No notes yet. Add your first note above!
          </Typography>
        ) : (
          <List>
            {notes.map((note) => (
              <ListItem
                key={note.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteNote(note.id)}
                    disabled={loading}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                sx={{
                  bgcolor: "background.paper",
                  mb: 1,
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                }}
              >
                <ListItemText
                  primary={note.content}
                  secondary={
                    note.createdAt
                      ? new Date(note.createdAt).toLocaleString()
                      : ""
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
};

export default NotesScreen;
