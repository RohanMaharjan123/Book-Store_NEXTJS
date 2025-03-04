from rest_framework import generics, permissions
from ..models import Bookstore
from ..serializers import BookstoreSerializer

class BookstoreListCreateAPIView(generics.ListCreateAPIView):
    queryset = Bookstore.objects.all()
    serializer_class = BookstoreSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class BookstoreDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bookstore.objects.all()
    serializer_class = BookstoreSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]