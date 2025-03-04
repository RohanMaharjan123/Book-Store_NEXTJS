from rest_framework import generics, permissions
from ..models import Publisher
from ..serializers import PublisherSerializer

class PublisherListCreateAPIView(generics.ListCreateAPIView):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class PublisherDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]